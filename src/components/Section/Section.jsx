export default function Section({ title, children }) {
    return(
        <>
            <section>
                <h1 className="main-heading">{title}</h1>
                {children}
            </section>
        </>
    )
}