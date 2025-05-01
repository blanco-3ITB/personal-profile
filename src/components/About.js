import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <div className="p-4 shadow rounded bg-white">
        <div className="row align-items-center">
          {/* Image on the Left */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/484902363_1227433852054202_4478597817207021281_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEjiwCizcdU48P7Fnps8e8Fpiq_f13cpzamKr9_XdynNnUczDJEbZKzxusYu5H1QCcYgBiJrSRXmQLpXqQfxrNN&_nc_ohc=Uw4n3vSX0T0Q7kNvwHI1AVQ&_nc_oc=AdkubzYfHWmAKeSkc1xoJQMdbQOVZ9OlNcEps_a8NHSVcDF98rqUB6q6pAOKvOkUMzI&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=I4pGPvEM4thliKYWysQMTg&oh=00_AfEpuHFdy-35PcvKStq77O3dkLwN2rzG2lV8ckJDKkPKhw&oe=68182C34"
              alt="John Cedric Blanco"
              className="img-fluid shadow-sm"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '12px',
                border: '3px solid #e0e0e0',
              }}
            />
          </div>

          {/* Text on the Right */}
          <div className="col-md-8">
            <h2 className="text-primary mb-3">About Me</h2>
            <p style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
              Hello! I'm <strong>John Cedric Blanco</strong>, an enthusiastic IT student at Pamantasan
              ng Cabuyao (3IT-B), deeply interested in programming, networking, and software
              development.
            </p>
            <p style={{ fontSize: '1.05rem', textAlign: 'justify' }}>
              My academic journey has equipped me with strong foundational knowledge in IT and a
              desire to apply what I learn to real-world situations. I'm driven by curiosity,
              problem-solving, and the excitement of collaborating with others.
            </p>
            <p style={{ fontSize: '1.05rem', textAlign: 'justify' }}>
              I'm actively seeking opportunities to expand my experience through internships,
              freelance projects, and tech community involvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
