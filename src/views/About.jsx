import { useState, useEffect } from "react"

const About = () => {
  const API_URL = "/skills.json"
  const [skills, setSkills] = useState([])

  try {
    const getSkills = async () => {
      const response = await fetch(API_URL)
      if (response.status != 200) {
        throw new Error
      }
      const data = await response.json()
      setSkills(data)
    }
    useEffect(() => {
      getSkills()
    }, [])
  }
  catch (Error) {
    alert(JSON.stringify(Error))
  }
  return (

    <div id="about" className="flex flex-col gap-3 bg-indigo-400 h-auto p-8 text-white">
      <div className="font-light tracking-wider text-justify">
        Hola. ¿Qué tal? Mi nombre es Valentina. Hace más de 10 de años creo páginas web de manera freelance: desde los inicios del HTML hasta el actual framework React.JS. He desarrollado distintos sitios: informativos, foros, blogs, landing page, e-commerce. Me considero proactiva, naturalmente curiosa, detallista, y me gusta estar constantemente mejorando mis habilidades.
      </div>
      <div id="badges" className="flex flex-wrap justify-center invert brightness-50 contrast-200 saturate-0">
        {skills.map((skill) => (
          <img className="rounded me-2 my-1 h-5" key={skill.id} alt={skill.name} src={'https://img.shields.io/badge/'+skill.name+'-'+skill.badge_bg_color+'?style=for-the-badge&logo='+ skill.logo + '&logoColor=' + skill.logo_bg_color} />
        ))}
      </div>
    </div>

  )
}

export default About