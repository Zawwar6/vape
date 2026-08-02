import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Product Not Found
      </div>
    );
  }

  const [selectedEdition, setSelectedEdition] = useState(
    product.id !== 3 ? product.editions[0] : null
  );

  const [selectedFlavor, setSelectedFlavor] = useState(
    product.id === 3 ? product.flavors[0] : ""
  );

  return (
    <section className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 mt-10 gap-20 items-center">

          {/* LEFT */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <img
              src={product.image}
              alt={product.category}
              className="w-full object-contain"
            />
          </div>

          {/* RIGHT */}
          <div>

            <p className="text-yellow-400 uppercase tracking-[3px] mb-3">
              {product.category}
            </p>

            {product.id === 3 ? (
              <>
                {/* Jagger Pro */}

                <div className="mt-10">
                  <label className="block mb-3 text-lg text-white">
                    Select Flavor
                  </label>

                  <select
                    value={selectedFlavor}
                    onChange={(e) => setSelectedFlavor(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none"
                  >
                    {product.flavors.map((flavor, index) => (
                      <option key={index} value={flavor}>
                        {flavor}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-white mb-5">
                    Selected Flavor
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-yellow-400/30 bg-white/5 px-5 py-4 text-center text-white transition hover:border-yellow-400 hover:bg-yellow-400/10">
                      {selectedFlavor}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* 6 in 1 & 4 in 1 */}

                <div className="mt-10">
                  <label className="block mb-3 text-lg text-white">
                    Select Edition
                  </label>

                  <select
                    value={selectedEdition.name}
                    onChange={(e) =>
                      setSelectedEdition(
                        product.editions.find(
                          (edition) => edition.name === e.target.value
                        )
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none"
                  >
                    {product.editions.map((edition) => (
                      <option key={edition.name} value={edition.name}>
                        {edition.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-white mb-5">
                    Available Flavors
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedEdition.flavors.map((flavor, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-yellow-400/30 bg-white/5 px-5 py-4 text-center text-white transition hover:border-yellow-400 hover:bg-yellow-400/10"
                      >
                        {flavor}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}