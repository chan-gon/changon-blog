import type { Metadata } from "next";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
    title: "CV",
    description: "My Professional Experience",
};

const EMAIL = "ideacaramel@gmail.com";
const PHONE = "+32 491 23 04 24";

export default function Cv() {
    return (
        <div className="max-w-screen-x font-sans">
            <h1 className="text-3xl font-bold mb-6">CV</h1>

            <div className="space-y-10 p-6 bg-white border border-gray-200 rounded-lg">
                <header>
                    <p className="text-5xl font-serif text-black mb-4">Chan Gon Kim</p>
                    <p className="text-lg text-gray-800">
                        <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
                        <CopyButton value={EMAIL} label="Copy email address" />
                        <span className="mx-2 text-gray-400">|</span>
                        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:underline">{PHONE}</a>
                        <CopyButton value={PHONE} label="Copy phone number" />
                        <span className="mx-2 text-gray-400">|</span>
                        <span className="">Authorized to work in Belgium</span>
                    </p>
                </header>

                <section>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Summary</h2>
                    <p className="leading-relaxed">
                        Software developer with over 3 years of experience building PHP/Laravel and React web applications integrated with contact center systems on Linux. Delivered contact center implementations for six clients and modernized a legacy PHP codebase to Laravel MVC on PHP 8. Fluent in English, with a background in marketing and sales.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Skills</h2>
                    <p className="mb-2">
                        <strong className="text-black">Languages & Software:</strong> PHP (Laravel), Python, React, Next.js, JavaScript, jQuery, CSS, PostgreSQL
                    </p>
                    <p className="mb-2">
                        <strong className="text-black">Operating Systems:</strong> Windows, Linux
                    </p>
                    <p className="mb-2">
                        <strong className="text-black">Tools:</strong> Git, Docker
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Work Experience</h2>

                    <div className="mb-3">
                        <h3 className="text-4xl font-serif mb-2 text-black">
                            CallNet Korea. <span className="font-serif italic font-normal text-3xl text-gray-600">Seoul, South Korea</span>
                        </h3>
                        <p className="text-lg font-bold mb-6 mt-4">Software Developer | 2022 – 2026</p>

                        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    Supervised contact center implementations for six clients, covering server setup, development of web applications (CRM and dashboards) integrated with contact center solutions, and design of telecom-integrated IVR call flows.
                                </li>
                                <li>
                                    Designed and developed web-based CRM and ERP applications (PHP/Laravel, React) integrated with the company&apos;s next-generation contact center solutions on Linux, building WebSocket APIs for real-time call control, agent status monitoring, and live dashboards for agents and supervisors.
                                </li>
                                <li>
                                    Modernized a legacy PHP-based CRM web application integrated with the company&apos;s contact center solution without changing the existing operating system.
                                    Migrated the single-file codebase to MVC architecture, upgraded PHP from 5.x to 8.x, and standardized database access using PDO to improve maintainability, address security vulnerabilities, and reduce code duplication.
                                    Created technical documentation to support ongoing maintenance and future development.
                                </li>
                                <li>
                                    Secured HTTP communication for an internal web application by generating and deploying a self-signed SSL/TLS certificate with OpenSSL.
                                </li>
                                <li>
                                    Replaced manual, text file-based version tracking with a self-hosted Git server (Gitea) on the company&apos;s internal NAS.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h3 className="text-4xl font-serif mb-2 text-black">
                            Einvention. <span className="font-serif italic font-normal text-3xl text-gray-600">Seoul, South Korea</span>
                        </h3>
                        <p className="text-lg font-bold mb-6 mt-4">Digital Marketing Specialist | 2019 – 2020</p>

                        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                            <p>
                                Proposed and executed advertising strategies tailored to client needs across search engines and social media channels.
                            </p>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h3 className="text-4xl font-serif mb-2 text-black">
                            Cortina Watch. <span className="font-serif italic font-normal text-3xl text-gray-600">Singapore</span>
                        </h3>
                        <p className="text-lg font-bold mb-6 mt-4">Sales Associate | 2016 – 2017</p>

                        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                            <p>
                                Sold luxury watches at a Rolex boutique, providing personalized service to customers.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Languages</h2>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">English</strong> | Fluent
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Korean</strong> | Native
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">French</strong> | Beginner
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Dutch</strong> | Beginner
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Japanese</strong> | Intermediate
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Education</h2>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Yedam Vocational Training Institute</strong> | 2020 - 2021
                            <br />
                            Completed a comprehensive web developer training program focused on Java-based web development, Oracle database design, SQL, and Spring Framework projects.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Engineer Information Processing</strong>
                            <br />
                            A Korean national technical certification that verifies practical competency in software development and information systems.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Keimyung University</strong> | 2010 - 2019
                            <br />
                            Bachelor of Arts in Advertising and Public Relations
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
