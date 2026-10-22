import React, { Component } from 'react'
import { RiArrowLeftUpLine } from "react-icons/ri";

export default class SinglePage extends Component {
  render() {
    return (
      <>
      <div className="bpage px-28">
      <p className="text-white font-[300] mt-5 flex cursor-pointer"><RiArrowLeftUpLine size={25} /> Back to Home</p>

      {/* Title */}
      <h1 className="text-6xl text-white font-[600]">Scrum Master VS Project Manager: Top differences to learn</h1>
      {/* Heading Image */}
      <img src="/images/ill.jpg" className='mt-10 rounded-lg h-96 w-[80em] object-cover' alt="" />

      {/* content */}

      <div className="content flex mt-24">
        <div className="author ">
          <div className="flex">
            <img src="/images/avatar.png" alt="" className='w-16' />
            <div className='name'><h2 className='ml-3 text-[#d1d0d0] font-[600]'>Abhay Vishwakarma</h2><h3 className="ml-3 text-sm text-[#9e9e9e]">Co Founder</h3></div>
          </div>
          <hr className='mt-3 border-[#6e6e6e]' />
        
        </div>

        <div className="contentt ml-32">
          
          <h2 className="text-4xl font-[500] text-white">Heading 2</h2>

          <h4 className=" text-white font-[400] mt-8 border-l-2 pl-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem iusto veniam necessitatibus repellat enim est delectus, laudantium deleniti quibusdam recusandae repellendus ratione et eum minima consequuntur modi cupiditate fugit nulla, mollitia vel autem eveniet soluta.</h4>

          <p className="text-[#c7c6c6] mt-8 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt officiis reprehenderit odio iste corrupti aliquam rem, voluptas ipsa suscipit in explicabo quisquam culpa minus earum magni recusandae eum optio? Voluptatem!</p>

          <p className="text-[#c7c6c6] mt-3 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt officiis reprehenderit odio iste corrupti aliquam rem, voluptas ipsa suscipit in explicabo quisquam culpa minus earum magni recusandae eum optio? Voluptatem!</p>
          <p className="text-[#c7c6c6] mt-3 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate dolores et nobis tempore quasi dolore minima molestiae corporis. Deleniti corporis ut ratione debitis esse sed, quasi veniam? Porro fugit repellendus repellat laudantium eius beatae dicta nobis rem excepturi obcaecati iusto, consectetur atque est aliquid quam voluptate at molestias culpa voluptatum consequatur provident eum tempora? Quidem necessitatibus dolore, aut est ab corporis. Voluptatum quis ex possimus ducimus. Vitae, accusamus velit illum nobis fugit eos voluptatibus consectetur repudiandae, voluptatum qui autem?</p>

          <p className="text-[#c7c6c6] mt-3 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt officiis reprehenderit odio iste corrupti aliquam rem, voluptas ipsa suscipit in explicabo quisquam culpa minus earum magni recusandae eum optio? Voluptatem!</p>

          <p className="text-[#c7c6c6] mt-8 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt officiis reprehenderit odio iste corrupti aliquam rem, voluptas ipsa suscipit in explicabo quisquam culpa minus earum magni recusandae eum optio? Voluptatem!</p>

          <p className="text-[#c7c6c6] mt-3 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt officiis reprehenderit odio iste corrupti aliquam rem, voluptas ipsa suscipit in explicabo quisquam culpa minus earum magni recusandae eum optio? Voluptatem!</p>
          <p className="text-[#c7c6c6] mt-3 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate dolores et nobis tempore quasi dolore minima molestiae corporis. Deleniti corporis ut ratione debitis esse sed, quasi veniam? Porro fugit repellendus repellat laudantium eius beatae dicta nobis rem excepturi obcaecati iusto, consectetur atque est aliquid quam voluptate at molestias culpa voluptatum consequatur provident eum tempora? Quidem necessitatibus dolore, aut est ab corporis. Voluptatum quis ex possimus ducimus. Vitae, accusamus velit illum nobis fugit eos voluptatibus consectetur repudiandae, voluptatum qui autem?</p>

          <p className="text-[#c7c6c6] mt-3 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt officiis reprehenderit odio iste corrupti aliquam rem, voluptas ipsa suscipit in explicabo quisquam culpa minus earum magni recusandae eum optio? Voluptatem!</p>
          

        </div>

      </div>



      </div>
      


      
      </>
    )
  }
}
