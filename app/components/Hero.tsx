export default function Hero() {
  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80)"
    }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"/>
      <div className="p-5 text-white mt-[-10rem] z-[2]">
        <h2 className="text-5xl font-bold">Solarview</h2>
        <p className="py-5 text-xl">Insert message Here</p>
        <button className="px-8 py-2 border">Action text</button>
      </div>
    </div>
  )
}
