import { Header } from "../common/Header"

import p1 from "../../images/p1.jpg"
import p2 from "../../images/p2.jpg"
import p3 from "../../images/p3.jpg"
import p4 from "../../images/p4.jpg"
import p5 from "../../images/p5.jpg"
import p6 from "../../images/p6.png"
export const ProjectsSection = () => {
    return (
        <div id='projects' className='bg-ultrablack py-20'>
            <Header text='Project Gallery' />
            <div class="container mx-auto">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={p1} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={p2} />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={p6} />
                        </div>
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={p3} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={p5} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={p4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProjectsSection