import React from 'react'

const Footer = () => {
    return (
      <div className="bg-green-300 text-xl h-24 text-center p-8 text-blue-700">
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2021{" "}
        <span className="font-bold text-green-800">CarriStore</span> All rights
        reserved
      </div>
    );
}

export default Footer
