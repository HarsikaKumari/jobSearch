import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 text-center">
            <div className="container mx-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} Harsika Kumari ❤. All rights reserved.</p>
                <nav className="mt-4">
                    <ul className="flex justify-center space-x-8">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
                <div className="mt-5 flex justify-center space-x-4">
                    <a href="https://www.instagram.com/tanishka0_6/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-10 h-10 hover:text-gray-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/harsika-kumari/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-10 h-10 hover:text-gray-400" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-10 h-10 hover:text-gray-400" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;