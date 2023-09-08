import Image from "next/image";
import Link from "next/link";

const Featured = () => {
    return (
        <div className="py-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-7xl pb-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Magnam, aliquid?
            </h1>
            <div className="grid md:grid-cols-2 relative h-[400] w-[400] gap-8 items-center">
                <Image
                    src="https://images.pexels.com/photos/5681675/pexels-photo-5681675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="bangladeshi culture"
                    // fill={true}
                    height={100}
                    width={100}
                    layout="responsive"
                    objectFit="contain"
                />
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aspernatur, cumque dolores? Veritatis ab nisi
                        exercitationem.
                    </h2>
                    <p className="py-10">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae quam quo voluptatum repellat aperiam. Vero,
                        doloribus ullam officia excepturi sapiente possimus odio
                        enim architecto placeat, voluptate id corporis aperiam
                        harum non perspiciatis aliquam eligendi unde reiciendis
                        recusandae tempore assumenda molestias! Veniam qui natus
                        accusantium illum numquam adipisci, doloremque harum id
                        voluptate nihil repudiandae at atque recusandae quo ex
                        facilis reprehenderit, molestiae assumenda iusto
                        consequuntur minus, possimus nobis aperiam voluptatum.
                        Illo.
                    </p>
                    <Link
                        href="#"
                        className="bg-slate-400 dark:bg-slate-200 rounded-md px-5 py-3 font-semibold dark:text-black"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;
