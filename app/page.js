import LikeButton from './like-button';

function Header({title}) {
    // console.log(title);
    return <h1>{title? title : "Default Title"}</h1>;
}

export default function HomePage() {
    const names = ["man", "what can I say", "mamba out"];

    return (
        <div>
            <Header title="Develop, Preview, Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
            <h1 className="text-blue-500"> I am blue</h1>
        </div>
    );
}