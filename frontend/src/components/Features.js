import React from 'react';

const Features = ({ items = [] }) => {
  const defaults = [
    {
      title: 'Certified Experts',
      desc: 'Trained professionals with modern techniques and gentle care.',
      color: 'from-yellow-50 to-white'
    },
    {
      title: 'Personalized Care',
      desc: 'Treatments tailored to your skin & hair profile for best results.',
      color: 'from-gray-50 to-white'
    },
    {
      title: 'Flexible Booking',
      desc: 'Online scheduling with reminders and easy rescheduling.',
      color: 'from-yellow-50 to-white'
    }
  ];

  const list = items.length ? items : defaults;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose GlowStack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">Premium experiences, crafted for modern lifestyles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((f, i) => (
            <div key={i} className={`p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow bg-gradient-to-br ${f.color}`}>
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <div className="text-yellow-600 font-bold">{i + 1}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;