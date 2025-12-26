import Buttton from './Button'

const Content = () => {
  return (
    <>
        <div className="container">
            <div className='p-5 rounded text-center bg-light-dark '>
                <h2>AUTHENTICATION AUTHORIZATION DEMO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum atque necessitatibus, totam aspernatur minima mollitia at unde quos nihil laboriosam exercitationem quo libero. </p>
                <Buttton name="Login" class="btn btn-outline-info" url={"login/"} />
            </div>   
        </div>   
    </>
  )
}

export default Content