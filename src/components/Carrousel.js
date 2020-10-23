import React from 'react'

const Carrousel = () => {
    return (
        <>
            <div className="carusel d-none">
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="3000">
                            {/* <img src={img1} class="d-block w-100" alt="..." /> */}
                        </div>
                        <div class="carousel-item" data-interval="3000">
                            {/* <img src={img2} class="d-block w-100" alt="..." /> */}
                        </div>
                        <div class="carousel-item" data-interval="3000">
                            {/* <img src={img3} class="d-block w-100" alt="..." /> */}
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>  
        </>
    )
}

export default Carrousel
