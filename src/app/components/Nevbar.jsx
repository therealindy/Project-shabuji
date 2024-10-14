export default function Nevbar() {
    return (
        <>
            <div as="nav" className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                {/* company pic*/}
                                <a href="/">
                                    <img
                                        src='https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/462368127_1201967064371003_6279712095163667306_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=1iW8ewglY9MQ7kNvgHywj6P&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=A9hXRme4MXFxd5T7VQJldFH&oh=03_Q7cD1QEF0hvX-ghnv15w9WL_knLA8kWh2UenxdkTyqO7JSO1Cg&oe=6731022B'
                                        alt="Your Company"
                                        className="h-16 w-auto" />
                                 </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
