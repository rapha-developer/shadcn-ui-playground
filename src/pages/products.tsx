import { useQuery } from "@tanstack/react-query";
import { CreateProductDialog } from "../components/create-product-dialog";
import { ProductsFilters } from "../components/product-filters";
import { Button } from "../components/ui/button";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import { PlusCircle } from "lucide-react";
import { getProducts } from "../data/products";
import { useSearchParams } from "react-router-dom";

export function Products() {
    const [searchParams] = useSearchParams()

    const id = searchParams.get('id')
    const name = searchParams.get('name')
    
    const { data: products } = useQuery({
        queryKey: ["products", id, name],
        queryFn: () => getProducts({
            id,
            name
        }),
    });

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold">Produtos</h1>

            <div className="flex items-center justify-between">
            <ProductsFilters />

            <Dialog>
                <DialogTrigger asChild>
                    <Button>
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Novo Produto
                    </Button>
                </DialogTrigger>

                <CreateProductDialog />
            </Dialog>
            </div>
            <div className="border rounded-lg p-2">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Produto</TableHead>
                        <TableHead>Preço</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                {products &&
                    products.map((product) => {
                        return (
                        <TableRow key={`key-${product.id}`}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            </div>
        </div>
    );
}
