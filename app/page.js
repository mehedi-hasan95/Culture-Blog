import Categories from "@/components/home/Categories";
import Featured from "@/components/home/Featured";

export default function Home() {
    return (
        <div className="dark:bg-slate-700">
            <div className="container mx-auto">
                <Featured />
                <Categories />
            </div>
        </div>
    );
}
