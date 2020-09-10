export default function Card({ project }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-8 bg-gray-800">
      <img className="w-full text-gray-300" src={project.image.url} alt={project.image.fileName}/>
      <div className="my-3 p-6">
        <h3 className="text-gray-300 text-2xl text-left pt-4">{project.title}</h3>
        <a className="text-purple-400 hover:text-purple-300" href={project.link} target="_blank">{project.link}</a>
        <p className="text-gray-300 py-4">{project.shortDescription}</p>
      </div>
    </div>
  )
}