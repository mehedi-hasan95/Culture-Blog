import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

const Posts = () => {
    return (
        <div className="flex gap-12 pb-10">
            <div className="w-2/3">
                <div className="flex flex-col gap-8 md:flex-row items-center pb-10">
                    <div className="flex-1">
                        <Image
                            src="https://img.freepik.com/free-photo/beautiful-turkish-girl-long-red-dress-walks-summer-old-city_1157-13378.jpg?w=1380&t=st=1694169281~exp=1694169881~hmac=4755dd7ded241bb6378f27e8d77043036760390d7adf2a2fa842e082f916042b"
                            alt="bangladesh"
                            height={500}
                            width={500}
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex-1">
                        <p>08.09.2023 - Bangladeshi</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl py-4 font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam, ducimus?
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea eligendi aspernatur non consequatur
                            excepturi provident sint totam. Impedit voluptate,
                            sint eius natus cupiditate veritatis illum
                            voluptates quasi quos. Dolor, iusto?
                        </p>
                        <Link
                            href="#"
                            className="bg-slate-400 dark:bg-slate-200 inline-block mt-10 rounded-md px-5 py-3 font-semibold dark:text-black"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:flex-row items-center pb-10">
                    <div className="flex-1">
                        <Image
                            src="https://img.freepik.com/free-photo/beautiful-turkish-girl-long-red-dress-walks-summer-old-city_1157-13378.jpg?w=1380&t=st=1694169281~exp=1694169881~hmac=4755dd7ded241bb6378f27e8d77043036760390d7adf2a2fa842e082f916042b"
                            alt="bangladesh"
                            height={500}
                            width={500}
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex-1">
                        <p>08.09.2023 - Bangladeshi</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl py-4 font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam, ducimus?
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea eligendi aspernatur non consequatur
                            excepturi provident sint totam. Impedit voluptate,
                            sint eius natus cupiditate veritatis illum
                            voluptates quasi quos. Dolor, iusto?
                        </p>
                        <Link
                            href="#"
                            className="bg-slate-400 dark:bg-slate-200 inline-block mt-10 rounded-md px-5 py-3 font-semibold dark:text-black"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:flex-row items-center pb-10">
                    <div className="flex-1">
                        <Image
                            src="https://img.freepik.com/free-photo/beautiful-turkish-girl-long-red-dress-walks-summer-old-city_1157-13378.jpg?w=1380&t=st=1694169281~exp=1694169881~hmac=4755dd7ded241bb6378f27e8d77043036760390d7adf2a2fa842e082f916042b"
                            alt="bangladesh"
                            height={500}
                            width={500}
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex-1">
                        <p>08.09.2023 - Bangladeshi</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl py-4 font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam, ducimus?
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea eligendi aspernatur non consequatur
                            excepturi provident sint totam. Impedit voluptate,
                            sint eius natus cupiditate veritatis illum
                            voluptates quasi quos. Dolor, iusto?
                        </p>
                        <Link
                            href="#"
                            className="bg-slate-400 dark:bg-slate-200 inline-block mt-10 rounded-md px-5 py-3 font-semibold dark:text-black"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
                <Pagination />
            </div>
            <div className="w-1/3">
                <div>
                    <h2 className="text-2xl md:text-3xl pb-8">
                        Populer Posts:
                    </h2>
                    <div className="pb-8">
                        <h4 className="maxContent bg-rose-300 px-3 py-2 rounded-full">
                            Bangladesh
                        </h4>
                        <div className="flex items-center gap-5">
                            <Image
                                src="https://img.freepik.com/free-photo/stylish-woman-with-retro-camera_1139-69.jpg?w=1380&t=st=1694172867~exp=1694173467~hmac=b1d80723db0d4f0b77548c7cb4581d7b10aab7dbd3ac064d6b92047f949a8252"
                                alt=""
                                height={50}
                                width={50}
                                className="min-h-[50px] rounded-full"
                            />
                            <div>
                                <Link
                                    href="#"
                                    className="text-lg font-semibold"
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Harum, quibusdam!
                                </Link>
                                <h4>Mehedi</h4>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8">
                        <h4 className="maxContent bg-rose-300 px-3 py-2 rounded-full">
                            Bangladesh
                        </h4>
                        <div className="flex items-center gap-5">
                            <Image
                                src="https://img.freepik.com/free-photo/stylish-woman-with-retro-camera_1139-69.jpg?w=1380&t=st=1694172867~exp=1694173467~hmac=b1d80723db0d4f0b77548c7cb4581d7b10aab7dbd3ac064d6b92047f949a8252"
                                alt=""
                                height={50}
                                width={50}
                                className="min-h-[50px] rounded-full"
                            />
                            <div>
                                <Link
                                    href="#"
                                    className="text-lg font-semibold"
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Harum, quibusdam!
                                </Link>
                                <h4>Mehedi</h4>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8">
                        <h4 className="maxContent bg-rose-300 px-3 py-2 rounded-full">
                            Bangladesh
                        </h4>
                        <div className="flex items-center gap-5">
                            <Image
                                src="https://img.freepik.com/free-photo/stylish-woman-with-retro-camera_1139-69.jpg?w=1380&t=st=1694172867~exp=1694173467~hmac=b1d80723db0d4f0b77548c7cb4581d7b10aab7dbd3ac064d6b92047f949a8252"
                                alt=""
                                height={50}
                                width={50}
                                className="min-h-[50px] rounded-full"
                            />
                            <div>
                                <Link
                                    href="#"
                                    className="text-lg font-semibold"
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Harum, quibusdam!
                                </Link>
                                <h4>Mehedi</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl pb-8">
                        Featured Posts:
                    </h2>
                    <div className="pb-8">
                        <h4 className="maxContent bg-rose-300 px-3 py-2 rounded-full">
                            Bangladesh
                        </h4>
                        <div className="flex items-center gap-5">
                            <Image
                                src="https://img.freepik.com/free-photo/stylish-woman-with-retro-camera_1139-69.jpg?w=1380&t=st=1694172867~exp=1694173467~hmac=b1d80723db0d4f0b77548c7cb4581d7b10aab7dbd3ac064d6b92047f949a8252"
                                alt=""
                                height={50}
                                width={50}
                                className="min-h-[50px] rounded-full"
                            />
                            <div>
                                <Link
                                    href="#"
                                    className="text-lg font-semibold"
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Harum, quibusdam!
                                </Link>
                                <h4>Mehedi</h4>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8">
                        <h4 className="maxContent bg-rose-300 px-3 py-2 rounded-full">
                            Bangladesh
                        </h4>
                        <div className="flex items-center gap-5">
                            <Image
                                src="https://img.freepik.com/free-photo/stylish-woman-with-retro-camera_1139-69.jpg?w=1380&t=st=1694172867~exp=1694173467~hmac=b1d80723db0d4f0b77548c7cb4581d7b10aab7dbd3ac064d6b92047f949a8252"
                                alt=""
                                height={50}
                                width={50}
                                className="min-h-[50px] rounded-full"
                            />
                            <div>
                                <Link
                                    href="#"
                                    className="text-lg font-semibold"
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Harum, quibusdam!
                                </Link>
                                <h4>Mehedi</h4>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8">
                        <h4 className="maxContent bg-rose-300 px-3 py-2 rounded-full">
                            Bangladesh
                        </h4>
                        <div className="flex items-center gap-5">
                            <Image
                                src="https://img.freepik.com/free-photo/stylish-woman-with-retro-camera_1139-69.jpg?w=1380&t=st=1694172867~exp=1694173467~hmac=b1d80723db0d4f0b77548c7cb4581d7b10aab7dbd3ac064d6b92047f949a8252"
                                alt=""
                                height={50}
                                width={50}
                                className="min-h-[50px] rounded-full"
                            />
                            <div>
                                <Link
                                    href="#"
                                    className="text-lg font-semibold"
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Harum, quibusdam!
                                </Link>
                                <h4>Mehedi</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
