import * as D from '../../data'

export default function Footer(){
  return(
    <footer className='p-4 footer footer-center bg-primary text-primary-content'>
      <div>
        <p>Copyright 2022 - All right reserved bt {D.randomCompanyName()}</p>
      </div>
    </footer>
  )
}