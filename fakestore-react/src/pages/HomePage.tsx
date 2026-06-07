import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "../types/Product";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">
          🛍️ FakeStore Catalog
        </h1>

        <p className="text-muted-foreground">
          Explora productos obtenidos desde FakeStore API
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain"
              />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-sm mb-3">
                {product.title}
              </CardTitle>

              <p className="font-bold text-lg">
                ${product.price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;