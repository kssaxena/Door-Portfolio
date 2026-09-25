import React, { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiDownload,
  FiFileText,
  FiMenu,
  FiPrinter,
  FiSearch,
  FiShield,
  FiX,
} from "react-icons/fi";
import ButtonWrapper from "../../components/Button";
import InputWrapper from "../../components/Input";
import { collections, products } from "../../constants/constants";

const Products = () => {
  const [activeCollection, setActiveCollection] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const collectionMatch =
        activeCollection === "all" || product.collection === activeCollection;

      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;

      const searchMatch =
        !query ||
        product.code.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return collectionMatch && categoryMatch && searchMatch;
    });
  }, [activeCollection, activeCategory, search]);

  const getCollection = (id) =>
    collections.find((collection) => collection.id === id);

  const printWebCatalogue = () => {
    window.print();
  };

  const printOriginalPdf = () => {
    const pdfWindow = window.open("/catalogue.pdf", "_blank");
    if (!pdfWindow) return;

    setTimeout(() => {
      try {
        pdfWindow.focus();
        pdfWindow.print();
      } catch (error) {
        console.error("Unable to automatically open print dialog:", error);
      }
    }, 1500);
  };

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/catalogue.pdf";
    link.download = "Aarcane-Doors-Catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-[#f3f0eb] text-[#1d1a17]">
      <section
        id="home"
        className="relative flex min-h-[calc(100vh-76px)] items-end overflow-hidden bg-[#191714]"
      >
        <img
          src="https://ik.imagekit.io/jarvisai/Arcane%20Doors/Hero_landing.png"
          alt="Aarcane Imperial Collection"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#151310] via-[#151310]/75 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#151310] via-transparent to-transparent" />

        {/* HERO CONTENT */}

        <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#d4b574]">
              <span className="h-px w-10 bg-[#d4b574]" />
              Aarcane Doors
            </div>

            <h1 className="text-white text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight">
              Engineered
              <br />
              <span className="italic text-[#d6b97c]">to impress.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Explore the Aarcane Doors catalogue — from statement Imperial
              entrances to contemporary Panorama, refined Nest and Lumina
              designs.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonWrapper
                label={"Explore catalogue"}
                onClick={() => scrollTo("catalogue")}
                className="text-white"
              />
              <ButtonWrapper
                label={"Original PDF"}
                onClick={printOriginalPdf}
                className="text-white"
              />
            </div>
          </div>

          {/* STATS */}

          <div className="mt-16 flex flex-wrap gap-8 border-t border-white/15 pt-6 text-white">
            <div>
              <div className="font-serif text-3xl">{products.length}</div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
                Catalogue entries
              </div>
            </div>

            <div>
              <div className="font-serif text-3xl">06</div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
                Collections
              </div>
            </div>

            <div>
              <div className="font-serif text-3xl">31</div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
                Catalogue pages
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        id="about"
        className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 lg:px-12 lg:py-28"
      >
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#9b7840]">
            The Aarcane Advantage
          </p>

          <h2 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight">
            Strength.
            <br />
            Precision.
            <br />
            <span className="italic text-[#9b7840]">Timeless design.</span>
          </h2>
        </div>

        <div className="flex items-center">
          <p className="max-w-xl text-sm leading-8 text-[#5c554d] sm:text-base">
            Aarcane Doors combines architectural sophistication with engineered
            strength. The catalogue presents collections designed around
            durability, security, refined finishes and distinctive visual
            character.
          </p>
        </div>
      </section>

      {/* =================================================
          COLLECTIONS
      ================================================= */}

      <section
        id="collections"
        className="bg-[#1c1916] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c9a96c]">
                Explore Collections
              </p>

              <h2 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight text-white">
                Six distinct
                <br />
                <span className="italic text-[#c9a96c]">door stories.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/45">
              Select a collection to instantly filter the catalogue.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => {
                  setActiveCollection(collection.id);

                  setActiveCategory("all");

                  scrollTo("catalogue");
                }}
                className="group relative aspect-[4/5] overflow-hidden text-left"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#d4b574]">
                    Aarcane
                  </div>

                  <h3 className="font-serif text-3xl text-white">
                    {collection.shortName}
                  </h3>

                  <p className="mt-3 max-w-sm text-xs leading-6 text-white/60">
                    {collection.description}
                  </p>
                  <ButtonWrapper label={"explore"} className="text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          CATALOGUE
      ================================================= */}

      <section
        id="catalogue"
        className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        {/* HEADER */}

        <div className="mb-10 flex flex-col gap-7">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#9b7840]">
              Digital Catalogue
            </p>

            <h2 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight">
              Find your door.
            </h2>
          </div>

          {/* SEARCH + FILTER */}

          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex flex-1 items-center px-4">
              <FiSearch className="mr-3 text-[#9b7840]" />

              <InputWrapper
                required={false}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search model code..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#1d1a17]/35"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-[#1d1a17]/40 hover:text-[#1d1a17]"
                >
                  <FiX />
                </button>
              )}
            </div>

            {/* CATEGORY */}

            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="h-12 w-full appearance-none border border-[#1d1a17]/15 bg-white px-4 pr-12 text-xs uppercase tracking-[0.12em] outline-none lg:w-[230px]"
              >
                <option value="all">All categories</option>

                <option value="Luxury Door">Luxury Door</option>

                <option value="Single Door">Single Door</option>

                <option value="Mother & Son Door">Mother & Son</option>

                <option value="Sidelight Door">Sidelight</option>

                <option value="Panorama Door">Panorama</option>

                <option value="Bedroom Door">Bedroom</option>

                <option value="Lumina Door">Lumina</option>
              </select>

              <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            <ButtonWrapper label={"Print view"} onClick={printWebCatalogue} />
          </div>
        </div>

        {/* COLLECTION FILTER */}

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCollection("all")}
            className={`shrink-0 border px-5 py-3 text-[9px] uppercase tracking-[0.2em] transition ${
              activeCollection === "all"
                ? "border-[#1d1a17] bg-[#1d1a17] text-white"
                : "border-[#1d1a17]/15 bg-white hover:border-[#9b7840]"
            }`}
          >
            All
          </button>

          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setActiveCollection(collection.id)}
              className={`shrink-0 border px-5 py-3 text-[9px] uppercase tracking-[0.2em] transition ${
                activeCollection === collection.id
                  ? "border-[#1d1a17] bg-[#1d1a17] text-white"
                  : "border-[#1d1a17]/15 bg-white hover:border-[#9b7840]"
              }`}
            >
              {collection.shortName}
            </button>
          ))}
        </div>

        {/* RESULT COUNT */}

        <div className="mb-7 flex items-center justify-between border-b border-[#1d1a17]/10 pb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#1d1a17]/45">
            {filteredProducts.length} products
          </span>

          {(search ||
            activeCollection !== "all" ||
            activeCategory !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setActiveCollection("all");
                setActiveCategory("all");
              }}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#9b7840]"
            >
              Clear filters
              <FiX />
            </button>
          )}
        </div>

        {/* PRODUCT GRID */}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
            {filteredProducts.map((product) => {
              const collection = getCollection(product.collection);

              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group text-left"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[3/4] overflow-hidden bg-[#dedbd5]">
                    <img
                      src={product.image}
                      alt={`Aarcane ${product.code}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />

                    {/* PAGE */}

                    <span className="absolute left-3 top-3 bg-white/90 px-2 py-1 text-[8px] uppercase tracking-[0.15em] text-[#1d1a17]/60 backdrop-blur">
                      P.{product.page}
                    </span>

                    {/* HOVER */}

                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                      <div className="flex w-full items-center justify-between p-4 text-white">
                        <span className="text-[9px] uppercase tracking-[0.18em]">
                          View Door
                        </span>

                        <FiArrowRight />
                      </div>
                    </div>
                  </div>

                  {/* DETAILS */}

                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-1 text-[8px] uppercase tracking-[0.15em] text-[#9b7840]">
                        {collection?.shortName}
                        {" · "}
                        {product.category}
                      </div>

                      <h3 className="text-xl">{product.code}</h3>
                    </div>

                    <FiShield className="mt-1 shrink-0 text-[#9b7840]" />
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center border border-dashed border-[#1d1a17]/15">
            <FiSearch size={30} className="mb-4 text-[#9b7840]" />

            <h3 className="font-serif text-2xl">No doors found</h3>

            <p className="mt-2 text-sm text-[#1d1a17]/50">
              Try another model number or filter.
            </p>
          </div>
        )}
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div className="relative grid max-h-[90vh] w-full max-w-5xl overflow-auto bg-[#f5f2ed] md:grid-cols-2">
            {/* CLOSE */}

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-black/70 text-white"
            >
              <FiX />
            </button>

            {/* IMAGE */}

            <div className="min-h-[400px] bg-[#dedbd5]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.code}
                className="h-full w-full object-cover"
              />
            </div>

            {/* INFO */}

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 lg:gap-3">
              <div className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[#9b7840]">
                {getCollection(selectedProduct.collection)?.name}
              </div>
              <h2 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight">
                {selectedProduct.code}
              </h2>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[#1d1a17]/45">
                {selectedProduct.category}
              </div>
              <div className="my-2 h-px bg-[#1d1a17]/10" />
              <p className="text-sm leading-4 text-[#5d574f]">
                {getCollection(selectedProduct.collection)?.description}
              </p>
              <div className="mt-2 grid grid-cols-2 border-y border-[#1d1a17]/10 py-5">
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-[#1d1a17]/40">
                    Collection
                  </div>

                  <div className="mt-2 font-serif text-lg">
                    {getCollection(selectedProduct.collection)?.shortName}
                  </div>
                </div>

                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-[#1d1a17]/40">
                    Catalogue Page
                  </div>

                  <div className="mt-2 font-serif text-lg">
                    {selectedProduct.page}
                  </div>
                </div>
              </div>
              <ButtonWrapper
                className="w-fit"
                label={"Print catalogue"}
                onClick={printWebCatalogue}
              />
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          PRINT STYLES

          These styles are intentionally inside the same
          component, so no separate CSS file is required.
      ================================================= */}

      <style>{`

        @media print {

          body {
            background: white !important;
          }

          header,
          footer,
          #home,
          #about,
          #collections,
          .print-hidden {
            display: none !important;
          }

          #catalogue {
            display: block !important;
            padding: 0 !important;
            max-width: none !important;
          }

          #catalogue > div:first-child {
            margin-bottom: 20px !important;
          }

          #catalogue button,
          #catalogue select,
          #catalogue input {
            display: none !important;
          }

          #catalogue .grid {
            display: grid !important;
            grid-template-columns:
              repeat(3, 1fr) !important;
            gap: 20px !important;
          }

          #catalogue article {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          #catalogue article img {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          @page {
            size: A4;
            margin: 12mm;
          }

        }

      `}</style>
    </div>
  );
};

export default Products;
