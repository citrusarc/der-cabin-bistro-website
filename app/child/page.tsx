"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpCircleSolid, ArrowUpRight, ThumbsUp } from "iconoir-react";
import { menus } from "@/data/menu";
import { MenuCategory, MenuItem } from "@/types";
import Modal from "@/components/ui/Modal";

export default function ChildHomePage() {
  const menu = menus.filter((item) => !item.status?.isHidden);
  const categories = [...new Set(menu.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const categoryRef = useRef<HTMLDivElement | null>(null);

  function handleScrollToCategory(category: MenuCategory) {
    const id = category.replace(/\s+/g, "-").toLowerCase();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -140;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveCategory(category);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sentinel = document.querySelector("#category-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { rootMargin: "-1px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-black">
      <div className="flex flex-row px-6 py-8 gap-4 w-full items-center rounded-2xl bg-zinc-800">
        <Image
          priority
          quality={85}
          sizes="72px"
          src="/Images/brand-logo.png"
          alt="Brand Logo"
          height={72}
          width={72}
        />
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-semibold text-white">
            Der&apos; Cabin Bistro
          </h1>
          <p className="text-md sm:text-lg font-medium text-zinc-400">
            Eat Good, Feel Good
          </p>
          <Link
            href="https://www.dercabin.com.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 "
          >
            <button className="flex px-4 py-2 gap-1 items-center text-md sm:text-lg font-medium rounded-full hover:cursor-pointer text-yellow-800 hover:text-white bg-yellow-500 hover:bg-yellow-600">
              Visit our website
              <span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div id="category-sentinel" className="h-0"></div>
      <div
        ref={categoryRef}
        className={`sticky top-0 z-50 grid grid-rows-3 grid-flow-col gap-4 text-md sm:text-lg font-semibold overflow-x-auto whitespace-nowrap bg-black/50 backdrop-blur-sm transition-all duration-300 scrollbar-none scrollbar-thumb-transparent scrollbar-track-transparent ${
          isSticky ? "py-4" : "py-2"
        }`}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              handleScrollToCategory(category);
            }}
            className={`transition text-left cursor-pointer ${
              activeCategory === category ? "text-yellow-500" : "text-zinc-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {categories.map((category) => (
        <section
          key={category}
          id={category.replace(/\s+/g, "-").toLowerCase()}
          className="flex flex-col gap-4 mt-2"
        >
          <h2 className="text-xl font-medium text-zinc-400">{category}</h2>
          <div className="flex flex-col gap-4">
            {menu
              .filter((item) => item.category === category)
              .map((item) => {
                const status = item.status || {};
                const disabled = status.isDisabled || status.isComingSoon;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-row gap-4 p-4 items-start rounded-2xl overflow-hidden bg-zinc-800 ${
                      disabled ? "opacity-50" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (!disabled) {
                        setSelectedItem(item);
                        setIsOpen(true);
                      }
                    }}
                  >
                    {status.isPromo && (
                      <p className="absolute top-2 left-0 z-10 px-1 py-0.5 rounded-tr-sm rounded-br-sm text-sm text-white bg-red-500">
                        Discount Off %
                      </p>
                    )}
                    {status.isComingSoon && (
                      <p className="absolute top-2 right-0 z-10 px-1 py-0.5 rounded-tl-sm rounded-bl-sm text-sm text-white bg-yellow-600">
                        Coming Soon
                      </p>
                    )}
                    <div className="relative w-24 h-24 aspect-square rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        fill
                        quality={75}
                        sizes="96px"
                        src={item.image}
                        alt={item.name}
                        className="object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div>
                        <h2 className="flex items-center gap-2 text-md sm:text-lg font-semibold text-white">
                          {item.name}
                          {status.isBestSeller && (
                            <ThumbsUp className="w-4 h-4 text-yellow-500" />
                          )}
                        </h2>
                        <p className="whitespace-pre-line text-sm text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex flex-row gap-4">
                        {item.price.standard && (
                          <div className="flex items-center gap-2 text-lg font-medium text-yellow-500">
                            {item.price.currency}
                            {item.price.standard.current}
                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                              {item.label}
                            </div>
                            {status.isPromo && (
                              <div className="flex items-center gap-2 text-sm ">
                                <span className="line-through text-zinc-600">
                                  {item.price.currency}
                                  {item.price.standard.original}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        {item.price.hot && (
                          <div>
                            <div className="text-sm text-zinc-600">Hot</div>
                            <div className="flex items-center gap-2 text-lg font-medium text-yellow-500">
                              {item.price.currency}
                              {item.price.hot.current}
                              {status.isPromo && (
                                <div className="flex items-center gap-2 text-sm ">
                                  <span className="line-through text-zinc-600">
                                    {item.price.currency}
                                    {item.price.hot.original}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        {item.price.cold && (
                          <div>
                            <div className="text-sm text-zinc-600">Cold</div>
                            <div className="flex items-center gap-2 text-lg font-medium text-yellow-500">
                              {item.price.currency}
                              {item.price.cold.current}
                              {status.isPromo && (
                                <div className="flex items-center gap-2 text-sm ">
                                  <span className="line-through text-zinc-600">
                                    {item.price.currency}
                                    {item.price.cold.original}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedItem && (
          <>
            <div className="relative w-full h-fit aspect-square rounded-xl overflow-hidden flex-shrink-0">
              <Image
                fill
                quality={85}
                sizes="(max-width: 448px) 100vw, 448px"
                src={selectedItem.image}
                alt={selectedItem.name}
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h2 className="flex items-center gap-2 text-md sm:text-lg font-semibold text-white">
                  {selectedItem.name}
                  {selectedItem.status?.isBestSeller && (
                    <span>
                      <ThumbsUp className="w-4 h-4 text-yellow-500" />
                    </span>
                  )}
                </h2>
                <p className="whitespace-pre-line text-sm text-zinc-400">
                  {selectedItem.description}
                </p>
              </div>
              {selectedItem.status?.isPromo && (
                <p className="w-fit px-1 py-0.5 rounded-sm text-sm text-white bg-red-500">
                  Discount Off %
                </p>
              )}
              <div className="flex flex-row gap-4">
                {selectedItem.price.standard && (
                  <div className="flex items-center gap-2 text-lg font-medium text-yellow-500">
                    {selectedItem.price.currency}
                    {selectedItem.price.standard.current}
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      {selectedItem.label}
                    </div>
                    {selectedItem.status?.isPromo && (
                      <div className="flex items-center gap-2 text-sm ">
                        <span className="line-through text-zinc-600">
                          {selectedItem.price.currency}
                          {selectedItem.price.standard.original}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {selectedItem.price.hot && (
                  <div>
                    <div className="text-sm text-zinc-600">Hot</div>
                    <div className="flex items-center gap-2 text-lg font-medium text-yellow-500">
                      {selectedItem.price.currency}
                      {selectedItem.price.hot.current}
                      {selectedItem.status?.isPromo && (
                        <div className="flex items-center gap-2 text-sm ">
                          <span className="line-through text-zinc-600">
                            {selectedItem.price.currency}
                            {selectedItem.price.hot.original}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {selectedItem.price.cold && (
                  <div>
                    <div className="text-sm text-zinc-600">Cold</div>
                    <div className="flex items-center gap-2 text-lg font-medium text-yellow-500">
                      {selectedItem.price.currency}
                      {selectedItem.price.cold.current}
                      {selectedItem.status?.isPromo && (
                        <div className="flex items-center gap-2 text-sm ">
                          <span className="line-through text-zinc-600">
                            {selectedItem.price.currency}
                            {selectedItem.price.cold.original}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex p-2 w-full justify-center rounded-full text-black bg-white"
            >
              Close
            </button>
          </>
        )}
      </Modal>
      {showScrollTop && (
        <button aria-label="Scroll to top" onClick={scrollToTop}>
          <ArrowUpCircleSolid className="fixed bottom-32 right-6 w-14 h-14 shadow-lg hover:cursor-pointer text-yellow-500/50" />
        </button>
      )}
    </div>
  );
}
