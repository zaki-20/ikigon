
const Table = () => {

    const data = [
        {
          title: "Specificatii print:",
          paragraph: "Print pe placa din alucobond Alucubondul este un material compozit cu un aspect premium lucios si este realizat dintr-un sandwich din 2 foi de aluminiu cu un strat interior din material plastic rezistent si izolator"
        },
        {
          title: null, // Title is null in this object
          paragraph: `Dimesiuni placa: 45 X 45 X 0,3 cm <br/>
          Placa are colturi rotunjite <br/>
          Agatatoare pentru perete + 2 tamburi`

        },

        {
            title: "Specificatii aplica spiralata:", // Title is null in this object
            paragraph: ` Aplica spiralata din vinil alb mat removabil 
             Vinilul este taiat in  astfel incat sa se 
               desprinda usor de placa `
  
          },

          {
            title: "Gestionarea comenzii", // Title is null in this object
            paragraph: `Timp de executie: 4 - 5 zile lucratoare <br/>
             Timp de livrare: 2 - 3 zile lucratoare <br/>
            ***Transportul nu este inclus in valoarea comenzii `
  
          },

          {
            title: "De retinut", // Title is null in this object
            paragraph: `In situatia posibilei calibrari diferite a monitorului 
            dumneavoastra, in anumite situatii culorile printului 
            pot diferi de cele de pe monitor`
          },
        // Add more objects as needed
        
      ];

  return (
    <>
          <div className='max-w-md sm:max-w-2xl mx-auto mt-32'>
            {data.map((item, index) => (
                    <div key={index} className={`border-t-[1px] border-l-[1px] border-r-[1px]  border-[#4b71a6b5] py-5 px-6 sm:px-20 sm:py-10 ${index == data.length - 1 ? 'border-b-[1px] border-[#4b71a6b5]' : ''}`}>
                    {item.title && <h1 className="sm:text-[16px] text-[14px] font-semibold font-poppins text-[#4b71a6]">{item.title}</h1>}
                <ul className="list-disc mt-2">
                    <li className="text-[12px]  font-poppins text-[#4b71a6]" dangerouslySetInnerHTML={{ __html: item.paragraph }}></li>
                </ul>
                </div>
            ))}
          
    </div>
    </>
  )
}

export default Table