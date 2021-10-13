                    import React, { useState } from 'react';
                    //import  {ReactDOM} from 'react-dom';
                    //import Card from './Card';
                    // import './Customer.css';
                    import menu from './menu';


                    const ManagerViewCards = () => {
                        const [items, setItems] = useState(menu);
                        const delhouse = (elem) => {
                            const houses = items
                            const index = houses.findIndex(x => x.id === elem.id);
//                             console.log(index)
                            houses.splice(index,1);
                            setItems(houses)
                      };

                        return (
                            <div>
                                <div className="menu-items container-fluid mt-5">
                                    <div className="row">
                                        <div className="col-11 mx-auto">
                                            <div className="row my-5">
                                                {
                                                    items.map((elem) => {
                                                        const { id, image, price, location, description } = elem;
                                                        return (
                                                            <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                                                <div className="row Item-inside">

                                                                    {/*for images*/}
                                                                    <div class="container">
                                                                        <div class="row">
                                                                            <div className="col-mid-6 ">
                                                                                <img id='1' src={image} alt={price} className="img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-md-12 col-lg-8">
                                                                        <div className="main-title pt-4 pb-3">
                                                                            <h3>{price}</h3>
                                                                            <h2>{location}</h2>
                                                                        </div>
                                                                        <div className="menu-price-book">
                                                                            <div className="price-book-divide d-flex justify-content-between">
                                                                                <p>{description}</p> <br />
                                                                                <a href="#">
                                                                                    <button className="btn btn-primary">View Property</button>
                                                                                </a>
                                                                                <a href="#" className="mx-2">
                                                                                    <button className="btn btn-primary"
                    //                                                                 onClick = {delhouse.bind(menu,elem)}
                                                                                    onClick = {() => delhouse(elem)}
                                                                                    >Delete Property</button>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )

                    }

                    export default ManagerViewCards;

