import card from "../components/shared/Card"
import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'


function AboutPage() {
  return <Card>
<div className="about">
    <h1>About this project</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam totam asperiores ut saepe quia nesciunt quo sed, expedita beatae.</p>
</div>
<p>
 <Link to="/">Back to home</Link>   
</p>
  </Card>
}

export default AboutPage