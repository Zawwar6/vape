import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useTranslation } from "react-i18next";

export default function ProductDetails() {
  const { t } = useTranslation();
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  // Sirf 6 in 1 aur 4 in 1 ke liye
  const [selectedEdition, setSelectedEdition] = useState(
    product?.id !== 3 ? product?.editions?.[0] : null
  );

  // Jagger Pro ke liye
  const [selectedFlavor, setSelectedFlavor] = useState(
    product?.id === 3 ? product?.flavors?.[0] : ""
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        {t("product.not_found")}
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-6">

        <div className="mt-10 grid items-center gap-20 lg:grid-cols-2">

          {/* =======================
              LEFT - PRODUCT IMAGE
          ======================== */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <img
              src={
                product.id === 1 || product.id === 2
                  ? selectedEdition?.image || product.image
                  : product.id === 3
                    ? product.flavorImages?.[selectedFlavor] || product.image
                    : product.image
              }
              alt={t(`categories.${product.category}`)}
              className="w-full object-contain"
            />
          </div>

          {/* =======================
              RIGHT
          ======================== */}
          <div>

            {/* CATEGORY */}
            <p className="mb-3 uppercase tracking-[3px] text-yellow-400">
              {t(`categories.${product.category}`)}
            </p>

            {/* =======================
                JAGGER PRO
            ======================== */}
            {product.id === 3 ? (
              <div className="mt-10">
                <div className="rounded-xl border border-yellow-400/30 bg-white/5 p-5">

                  <label className="mb-3 block text-lg text-white">
                    {t("product.select_flavor")}
                  </label>

                  <select
                    value={selectedFlavor}
                    onChange={(e) =>
                      setSelectedFlavor(e.target.value)
                    }
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none"
                  >
                    {product.flavors.map((flavor, index) => (
                      <option key={index} value={flavor}>
                        {t(`flavors.${flavor}`)}
                      </option>
                    ))}
                  </select>

                </div>
              </div>
            ) : (

              /* =======================
                  6 IN 1 & 4 IN 1
              ======================== */

              <div className="mt-10">
                <div className="rounded-xl border border-yellow-400/30 bg-white/5 p-5 text-white">

                  {/* SELECT EDITION */}
                  <label className="mb-3 block text-center text-lg text-white">
                    {t("product.select_edition")}
                  </label>

                  <div className="flex justify-center">
                    <select
                      value={selectedEdition?.name || ""}
                      onChange={(e) =>
                        setSelectedEdition(
                          product.editions.find(
                            (edition) =>
                              edition.name === e.target.value
                          )
                        )
                      }
                      className="w-full max-w-xs rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-center text-white outline-none"
                    >
                      {product.editions.map((edition) => (
                        <option
                          key={edition.name}
                          value={edition.name}
                        >
                          {t(`editions.${edition.name}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* FLAVORS */}
                  <div className="mt-5 border-t border-yellow-400/20 pt-5">
                    <div className="grid grid-cols-2 gap-y-3 text-center">
                      {selectedEdition?.flavors?.map(
                        (flavor, index) => (
                          <div key={index}>
                            {t(`flavors.${flavor}`)}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* =======================
                PRODUCT INFORMATION
            ======================== */}
            {product.descriptionKey && (
              <div className="mt-10 text-white">

                {/* DESCRIPTION */}
                <p className="text-base leading-7 text-white/80">
                  {t(
                    `productInfo.${product.descriptionKey}`
                  )}
                </p>

                {/* PERFORMANCE */}
                {product.performance && (
                  <div className="mt-8">
                    <h3 className="font-semibold text-yellow-400">
                      {t(
                        `productInfo.${product.performance.titleKey}`
                      )}
                    </h3>

                    <p className="mt-2 leading-7 text-white/80">
                      {t(
                        `productInfo.${product.performance.textKey}`
                      )}
                    </p>
                  </div>
                )}

                {/* SPECIFICATIONS */}
                {product.specifications?.length > 0 && (
                  <div className="mt-8 space-y-5">

                    {product.specifications.map((spec) => (
                      <div key={spec.titleKey}>

                        <h4 className="font-semibold text-white">
                          {t(
                            `productInfo.${spec.titleKey}`
                          )}
                        </h4>

                        <p className="mt-1 text-white/70">
                          {t(
                            `productInfo.${spec.valueKey}`
                          )}
                        </p>

                      </div>
                    ))}

                  </div>
                )}

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}