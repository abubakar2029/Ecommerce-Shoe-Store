import { Link } from "react-router-dom"
function AdminPanelCards(props) {
    let card = props.card;
    let temp = [{ component: "component1", path: "/home" }, { component: "component1", path: "/home" }]
    return (
        /* an admin panel card */
        <div className="flex flex-col justify-around w-48 bg-white shadow-md mb-7 text-left py-3 pl-6">
            <h1 className="font-semibold">{card.title}</h1>
            {
                card.links.map((value) => {
                    return <Link to={value.path} className="text-blue-500 hover:text-blue-700">{value.componentName}</Link>
                })
            }
        </div>
    )
}
export { AdminPanelCards }