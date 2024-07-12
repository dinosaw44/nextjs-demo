'use client';

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FormEvent } from "react";
import { type Product } from "@/components/product"

type SearchProps = {
  handleChange: (newValue: string) => void,
  handleResults: (data: Product[]) => void,
}

export function Search({ handleChange, handleResults }: SearchProps) {
    const search = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  
      const formData = new FormData(event.currentTarget)
      const search = formData.get("search")?.toString()
      const response = await fetch(`/api?search=${search}`)
      const data = await response.json()

      handleResults(data)
      handleChange(search ?? "")
    }
  
    return <form onSubmit={search} className="flex gap-2">
      <Input
        name="search"
        placeholder="Search"
        required={true}
      />
      {/* <Button>Scan</Button> */}
    </form>
  }