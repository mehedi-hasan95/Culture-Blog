import categories from "@/utility/Categories.json";
import Image from "next/image";
import Link from "next/link";
const Categories = () => {
    return (
        <div className="dark:bg-slate-700">
            <div className="px-5 pb-20">
                <h2 className="text-2xl md:text-3xl lg:text-4xl pb-5 font-bold">
                    Post Categories:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                    {categories.map((cateory) => (
                        <Link
                            href="#"
                            key={cateory._id}
                            className={`flex gap-3 items-center bg-purple-300 px-5 py-3`}
                        >
                            <Image
                                src={cateory.img}
                                alt={cateory.name}
                                height={40}
                                width={40}
                                layout="fixed"
                                className="rounded-full min-h-[40px] min-w-[40px]"
                            />
                            <h4 className="capitalize">{cateory.name}</h4>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
