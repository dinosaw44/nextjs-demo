"use client";

import { type Product, Search } from "@/components/product"
import { Card, CardHeader } from "@nextui-org/card";
import { useState } from "react";

function Results({ items }: { items: { name: string }[] }) {
  const item = (name: string) => <Card>
    <article>
      <CardHeader>
        <hgroup>
          <h1 className="text-3xl capitalize">{name}</h1>
          <p className="text-xs pl-4">{"1 item"}</p>
        </hgroup> 
      </CardHeader>
    </article>
  </Card>

  return items.length === 0
    ? <p className="italic text-center">No results...</p>
    : <ul className="grid gap-2">{items.map(({ name }) => item(name))}</ul>
}

export default function Home() {
  const [searchValue, setSearchValue] = useState("")
  const [products, setProducts] = useState<Product[]>()

  const resultCount = products?.length ?? 0

  return <main className="pt-4">
    <div className="max-w-md mx-auto">
      <Search 
        handleChange={setSearchValue}
        handleResults={data => (setProducts(data), setSearchValue(searchValue))} 
      />
    </div>
    {
      products && <div className="max-w-prose mx-auto mt-12">
        { !!resultCount && <h2 className="mb-2">{`Results for '${searchValue}' (${products.length})`}</h2>}
        <Results items={products as { name: string }[]}/>
      </div>
    }
  </main>
}