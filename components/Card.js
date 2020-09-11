export default function Card({ project }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 bg-gray-800">
      <img className="w-full text-gray-300" src={project.image.url} alt={project.image.fileName}/>
      <div className="my-3 px-6">
        <h3 className="text-gray-300 text-2xl text-left pt-4">{project.title}</h3>
        <a className="text-purple-400 hover:text-purple-300" href={project.link} target="_blank">{project.link}</a>
        <p className="text-gray-300 py-4">{project.shortDescription}</p>
        <div className=" pt-4 pb-2">
          {project.technologies.map(tech => (
            <span className="inline-block bg-gray-700 rounded-full px-2 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">#{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}