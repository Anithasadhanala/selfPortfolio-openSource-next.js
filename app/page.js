import React from 'react';

function FloatingIcons() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
      <div className="flex flex-col items-center">
      <button className="relative rounded-full w-12 h-12 overflow-hidden transition-all duration-300 hover:w-32 hover:shadow-lg">
        <p>anitha</p>
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500 text-white transition-all duration-300 opacity-0 hover:opacity-100">
        
      <p>hi</p>
      <p>hello</p>
       
      </span>
   
    </button>



    <button className="relative rounded-full w-12 h-12 overflow-hidden transition-all duration-300 hover:w-32 hover:shadow-lg">
        <p>anitha</p>
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500 text-white transition-all duration-300 opacity-0 hover:opacity-100">
        
      <p>hi</p>
      <p>hello</p>
       
      </span>
   
    </button><button className="relative rounded-full w-12 h-12 overflow-hidden transition-all duration-300 hover:w-32 hover:shadow-lg">
        <p>anitha</p>
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500 text-white transition-all duration-300 opacity-0 hover:opacity-100">
        
      <p>hi</p>
      <p>hello</p>
       
      </span>
   
    </button><button className="relative rounded-full w-12 h-12 overflow-hidden transition-all duration-300 hover:w-32 hover:shadow-lg">
        <p>anitha</p>
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500 text-white transition-all duration-300 opacity-0 hover:opacity-100">
        
      <p>hi</p>
      <p>hello</p>
       
      </span>
   
    </button><button className="relative rounded-full w-12 h-12 overflow-hidden transition-all duration-300 hover:w-32 hover:shadow-lg">
        <p>anitha</p>
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500 text-white transition-all duration-300 opacity-0 hover:opacity-100">
        
      <p>hi</p>
      <p>hello</p>
       
      </span>
   
    </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="p-8">
        {/* Your content */}
        <div className="h-96 bg-gray-200 mb-8">Scrollable Content</div>
        <div className="h-96 bg-gray-300 mb-8">More Content</div>
        <div className="h-96 bg-gray-400 mb-8">Even More Content</div>
        <div className="h-96 bg-gray-500 mb-8">Keep Scrolling</div>
      </div>
      <FloatingIcons />
    </div>
  );
}

export default App;
