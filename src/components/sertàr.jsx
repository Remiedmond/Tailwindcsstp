 <div className="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div className="col-span-3 grid grid-cols-subgrid gap-4">
          <div className="col-start-2">06</div>
        </div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-green-500 text-white">Colonne 1</div>
        <div className="bg-green-500 text-white p-4 rounded">Colonne 2</div>
        <div className="bg-green-500 text-white p-4 rounded">Colonne 3</div>
        <div className="bg-green-500 text-white p-4 rounded">Colonne 4</div>
      </div>

      <div className="grid grid-cols-[200px_1fr_100px] gap-1 mb-4">
        <div className="bg-purple-500 text-white p-4 rounded">Sidebar (200px)</div>
        <div className="bg-purple-500 text-white p-4 rounded">Contenu principal (flexible)</div>
        <div className="bg-purple-500 text-white p-4 rounded">Aside (100px)</div>
      </div>
