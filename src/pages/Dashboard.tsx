import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from 'sonner';

interface DashboardData {
    baseId: string;
    tableId: string;
    records: any[];
}

const Dashboard = () => {
    const { logout, token, tables } = useAuth();
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(false);
    const [activeTableId, setActiveTableId] = useState<string>(tables.length > 0 ? tables[0].id : '');

    useEffect(() => {
        if (tables.length > 0 && !activeTableId) {
            setActiveTableId(tables[0].id);
        }
    }, [tables]);

    useEffect(() => {
        const fetchData = async () => {
            if (!activeTableId) return;

            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/api/dashboard/data?tableId=${activeTableId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                } else {
                    toast.error('Error al cargar datos del dashboard');
                }
            } catch (error) {
                toast.error('Error de conexión');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token, activeTableId]);

    // Helper to get dynamic headers from the first record
    const getHeaders = (records: any[]) => {
        if (!records || records.length === 0) return [];
        return Object.keys(records[0].fields);
    };

    return (
        <div className="container mx-auto py-10 px-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard Cliente</h1>
                    <p className="text-muted-foreground mt-2">Bienvenido a tu portal privado.</p>
                </div>
                <Button onClick={logout} variant="outline">Cerrar Sesión</Button>
            </div>

            {tables.length > 0 ? (
                <Tabs value={activeTableId} onValueChange={setActiveTableId} className="space-y-6">
                    <TabsList>
                        {tables.map((table) => (
                            <TabsTrigger key={table.id} value={table.id}>
                                {table.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value={activeTableId} className="space-y-6">
                        {loading ? (
                            <div className="flex justify-center p-8">
                                <p>Cargando datos...</p>
                            </div>
                        ) : data ? (
                            <Card>
                                <CardHeader>
                                    <CardTitle>{tables.find(t => t.id === activeTableId)?.name || 'Datos'}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {data.records.length > 0 ? (
                                        <div className="rounded-md border overflow-x-auto">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        {getHeaders(data.records).map((header) => (
                                                            <TableHead key={header}>{header}</TableHead>
                                                        ))}
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {data.records.map((record: any) => (
                                                        <TableRow key={record.id}>
                                                            {getHeaders(data.records).map((header) => (
                                                                <TableCell key={`${record.id}-${header}`}>
                                                                    {record.fields[header]}
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    ) : (
                                        <p className="text-center py-8 text-muted-foreground">No hay datos disponibles en esta tabla.</p>
                                    )}
                                </CardContent>
                            </Card>
                        ) : (
                            <p>No se pudieron cargar los datos.</p>
                        )}
                    </TabsContent>
                </Tabs>
            ) : (
                <p>No tienes tablas asignadas. Contacta con soporte.</p>
            )}
        </div>
    );
};

export default Dashboard;
