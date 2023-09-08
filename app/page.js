import Categories from "@/components/home/Categories";
import Featured from "@/components/home/Featured";
import Posts from "@/components/home/Posts";

export default function Home() {
    return (
        <div className="dark:bg-slate-700">
            <div className="container mx-auto">
                <Featured />
                <Categories />
                <Posts />
            </div>
        </div>
    );
}
