import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
      <div className="container mx-auto w-full px-8 py-2">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <div className="text-sm font-semibold">Mount Lawu</div>
            <p className="text-xs">Fine Indonesian Food</p>
            <p className="text-xs">Würzenrain 24</p>
            <p className="text-xs">CH 6013 Eigenthal</p>
            <p className="text-xs">Switzerland</p>
            <div className="mt-2">
              <Link href="mailto:info@mount-lawu.ch" className="text-blue-500 text-xs">info@mount-lawu.ch</Link>
            </div>
            <p className="text-xs">Fon +41 (0)79 828 48 39</p>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-xs font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/privacy-policy" className="mr-4 hover:underline text-xs md:mr-6">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline text-xs ">Contact</Link>
            </li>
          </ul>
        </div>
        <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="#" className="hover:underline">Vanilla-id</Link>. All Rights Reserved.</span>
      </div>
  );
}
