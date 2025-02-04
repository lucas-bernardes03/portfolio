"use client"

import {useEffect, useState} from "react";
import {ChevronDown, Globe} from "lucide-react";
import Flag from "react-world-flags";

const languages = [
    { code: "en", name: "English", flag: "GB" },
    { code: "pt", name: "Português", flag: "BR" },
    { code: "de", name: "Deutsch", flag: "DE" },
]

export function I18nToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang)
    setIsOpen(false)
    // Here you would typically update your i18n context or make an API call
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 px-3 py-2 rounded-md "
      >
        <Flag code={selectedLang.flag} className="w-5 h-5 rounded-sm object-cover" />
        <span>{selectedLang.code.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 rounded-md shadow-xl z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center space-x-2 w-full px-4 py-2 text-left"
              onClick={() => selectLanguage(lang)}
            >
              <Flag code={lang.flag} className="w-5 h-5 rounded-sm object-cover" />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}