import React from "react"

export default function Features() {
  return (
    <section className="py-8 px-4 sm:text-left text-center">
      <div className="flex flex-wrap -mx-4 -mb-6">
        <div className="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-database fa-2x text-indigo-600 dark:text-indigo-200"></i>
          <h3 className="text-xl my-3 font-semibold">Data-driven</h3>
          <p className="text-gray-500 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
            Every aspect of the game is controlled through text configuration
            files. Before shipping, configuration files are compiled to
            efficient platform-specific binary blobs.
          </p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-project-diagram fa-2x text-indigo-600 dark:text-indigo-200"></i>
          <h3 className="text-xl my-3 font-semibold">Data-oriented</h3>
          <p className="text-gray-500 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
            Data in memory is organized to achieve the maximum performance
            possible on every platform.
          </p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-fighter-jet fa-2x text-indigo-600 dark:text-indigo-200"></i>
          <h3 className="text-xl my-3 font-semibold">Fast-iteration times</h3>
          <p className="text-gray-500 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
            Every game asset is hot-reloadable, code included. Evaluate
            modifications and adjustments on-the-fly without having to reboot
            the game every time.
          </p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-user-edit fa-2x text-indigo-600 dark:text-indigo-200"></i>
          <h3 className="text-xl my-3 font-semibold">Cross-platform Editor</h3>
          <p className="text-gray-500 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
            Runs and looks equally well both on Linux and on Windows. Designed
            to be as fail-safe as possible to never lose your work if crashes
            should occur.
          </p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-feather fa-2x text-indigo-600 dark:text-indigo-200"></i>
          <h3 className="text-xl my-3 font-semibold">Lightweight codebase</h3>
          <p className="text-gray-500 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
            Engine plus tools amounts to less than 50K LOC. Written in simple
            'C-style' C++. It is easy for anyone to understand and make
            modifications.
          </p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <i className="fas fa-code-branch fa-2x text-indigo-600 dark:text-indigo-200"></i>
          <h3 className="text-xl my-3 font-semibold">Free and Open Source</h3>
          <p className="text-gray-500 dark:text-gray-50 leading-relaxed sm:mx-0 mx-10">
            All the code is released under the very permissive MIT license and
            can be downloaded via GitHub by anyone.
          </p>
        </div>
      </div>
    </section>
  )
}
