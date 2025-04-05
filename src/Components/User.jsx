
export default function User({picture:{large},name:{title,first,last}}) {
  return (
    <div className="userBox w-full flex flex-col gap-2 rounded-[8px] bg-white">
    <div className="IMG max-h-[200px] w-full flex justify-center relative rounded-[8px]">
      <div className="pro_placeholder h-[150px] w-full flex justify-center items-center">
        <img src={large} alt={title} className="w-full h-[200px] max-h-[200px] object-cover rounded-[8px]" />
      </div>
    </div>
    <div className="Title min-h-[50px] w-full flex justify-center items-center py-[.5em] mt-5">
      <p className="text-slate-800 text-lg font-medium font-Roboto400 text-center">{title} {first} {last}</p>
    </div>
  </div>
  )
}
