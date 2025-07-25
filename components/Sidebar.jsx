import Button from './Button';

export default function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-stone-200">Your projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    New project
                </Button>
            </div>
            <ul>
                {projects.map(project => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-md my-1 text-stone-400 hover:bg-stone-800 hover:text-stone-200"

                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-stone-800 text-stone-200"
                    } else {
                        cssClasses += " text-stone-400"
                    }

                    return (
                        <li key={project.id}>
                            <button
                                onClick={() => onSelectProject(project.id)}
                                className={cssClasses}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}