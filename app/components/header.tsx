import {ThemeToggle} from "@/app/components/theme-toggle";
import Link from "next/link";
import {I18nToggle} from "@/app/components/i18n-toggle";

export default function Header() {
    return (
        <header className="py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="#about" className="hover:text-blue-400 transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#skills" className="hover:text-blue-400 transition-colors">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="hover:text-blue-400 transition-colors">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <ThemeToggle/>
                    <I18nToggle/>
                </div>
            </div>
        </header>
    )
}