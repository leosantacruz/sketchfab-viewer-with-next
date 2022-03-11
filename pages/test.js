export default function test() {
    return (
        <>
            <div className="">
                <div className="hero min-h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Página de prueba</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="m-5 btn btn-primary">Boton primario</div>
                    <div className="m-5 btn btn-secondary">Boton secundario</div>
                    <div className="m-5 btn btn-info">Boton info</div>
                </div>

                <div className="mt-5 text-center">
                    <label className="swap swap-flip text-9xl">

                        <input type="checkbox" />

                        <div className="swap-on">😈</div>
                        <div className="swap-off">😇</div>
                    </label>
                </div>


            </div>
        </>
    )
}