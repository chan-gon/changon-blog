import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CV",
    description: "My Professional Experience",
};

export default function Cv() {
    return (
        <div className="max-w-screen-xl font-sans">
            <h1 className="text-3xl font-serif text-black mb-6">CV</h1>

            <div className="space-y-10">
                <section>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Work Experiences</h2>

                    <div className="mb-16">
                        <h3 className="text-4xl font-serif mb-2 text-black">
                            CallNet Korea. <span className="font-serif italic font-normal text-3xl text-gray-600">Seoul, S.Korea</span>
                        </h3>
                        <p className="text-lg font-bold mb-6 mt-4">Junior Software Engineer | 2022 – Present</p>

                        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                            <p>
                                Developed and maintained PHP (Laravel) + React web applications integrated with the company's contact center solution in both Linux and Windows environments
                                Built customized APIs according to client’s requirements such as call control, agent status monitoring and real-time dashboards for agents and supervisors
                                Modified and maintained contact center solution modules written in C and C++ according to client’s requirements.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-4xl font-serif mb-2 text-black">
                            Einvention. <span className="font-serif italic font-normal text-3xl text-gray-600">Seoul, S.Korea</span>
                        </h3>
                        <p className="text-lg font-bold mb-6 mt-4">Digital Marketing Specialist | 2019 – 2020</p>

                        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                            <p>
                                Proposed and executed advertising strategies tailored to customer requirements using
                                various search platforms and social media channels.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-4xl font-serif mb-2 text-black">
                            Cortina Watch. <span className="font-serif italic font-normal text-3xl text-gray-600">Singapore</span>
                        </h3>
                        <p className="text-lg font-bold mb-6 mt-4">Sales Associate | 2016 – 2017</p>

                        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                            <p>
                                Sold luxury watches at a Rolex boutique in Singapore, providing personalized service to
                                customers and supporting overall sales performance.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Skills</h2>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">PHP</strong> | Laravel, Version 5.*, 7.*, 8.*
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">React</strong> | Hooks, State Management, API Integration
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">PostgreSQL</strong>
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Docker</strong> | Basic Usage
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Get / CI</strong> | Basic Usage
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Linux</strong> | CentOS 6, 7 / Rocky Linux 8, 10
                        </p>
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
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Certifications</h2>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Engineer Information Processing</strong>
                            <br />
                            A Korean national technical certification that verifies practical competency in software development and information systems.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Craftsman Furniture Making</strong>
                            <br />
                            Certified technical expertise in the design, assembly, and precise finishing of all types of wood furniture.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Craftsman in Architectural Carpentry</strong>
                            <br />
                            Certified proficiency in structural carpentry for construction, including formwork fabrication and building essential wooden frameworks.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-gray-500">Education</h2>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Yedam Vocational Training Institute</strong> | 2020 ~ 2021
                            <br />
                            Completed a comprehensive web developer training program focused on Java-based web development, Oracle database design, SQL, and Spring Framework projects.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong className="text-black">Keimyung University</strong> | 2010 ~ 2019
                            <br />
                            Bachelor of Arts in Advertising and Public Relations
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
