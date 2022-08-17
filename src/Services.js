import React from "react";
import Card from "./Card";
import Carddata from "./Carddata";
const Services = () => {

    return (<>

        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {Carddata.map((val) => {

                            return (
                                <Card
                                    key={val.id}               // key help React identify which items changed added/removed//reordered/to give unique identity to every element inside the array
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    subtitle={val.subtitle}
                                    links={val.links} />
                            )

                        })}
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}
export default Services;