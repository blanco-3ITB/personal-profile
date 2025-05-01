import React from 'react';
import '../App.css'; 


function Home() {
  return (
    <div className="container mt-5">
      <div className="home-container">
        <div className="row align-items-center">
          {/* Image on the Left */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/484902363_1227433852054202_4478597817207021281_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEjiwCizcdU48P7Fnps8e8Fpiq_f13cpzamKr9_XdynNnUczDJEbZKzxusYu5H1QCcYgBiJrSRXmQLpXqQfxrNN&_nc_ohc=Uw4n3vSX0T0Q7kNvwHI1AVQ&_nc_oc=AdkubzYfHWmAKeSkc1xoJQMdbQOVZ9OlNcEps_a8NHSVcDF98rqUB6q6pAOKvOkUMzI&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=I4pGPvEM4thliKYWysQMTg&oh=00_AfEpuHFdy-35PcvKStq77O3dkLwN2rzG2lV8ckJDKkPKhw&oe=68182C34"
              alt="John Cedric Blanco"
              className="img-fluid shadow-sm"
            />
          </div>

          {/* Text on the Right */}
          <div className="col-md-8">
            <h1 className="heading mb-3 text-primary">Welcome to My Personal Website</h1>
            <p className="lead description">
              Hi, I'm <strong>John Cedric Blanco</strong>, a passionate college student currently
              pursuing a Bachelor’s degree in Information Technology at Pamantasan ng Cabuyao,
              enrolled in the 3IT-B section.
            </p>
            <p className="additional-info mb-3">
              Passionate about technology, I am continuously developing my skills in programming,
              networking, and software development. I aim to use these skills to build innovative
              solutions and contribute to the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
