import useNoteStore from '../store/useNoteStore'

const MdmViewer: React.FC = () => {

    const oneLiner = useNoteStore((state) => state.oneLiner);
    const setOneLiner = useNoteStore((state) => state.setOneLiner);
    
    return (<div>
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
            Clinical One Liner
          </label>
          <textarea
            className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            rows={1}
            value={oneLiner}
            onChange={(e) => setOneLiner(e.target.value)}
          />
        </section>

        {/* Demographics & Presentation */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Gender */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">Gender</h3>
            <div className="space-y-2">
              {['Male', 'Female'].map((g) => (
                <label key={g} className="flex items-center space-x-3 cursor-pointer p-1 hover:bg-slate-50 rounded">
                  <input 
                    type="checkbox" name="gender" 
                    checked={gender === g} 
                    onChange={() => setGender(g as any)}
                    className="text-blue-600 focus:ring-blue-500 h-4 w-4" 
                  />
                  <span className="text-sm font-medium">{g}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Age Group */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">Age Group</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Neonate', 'Infant', 'Child', 'Adolescent', 'Adult', 'Elderly'].map((age) => (
                <label key={age} className="flex items-center space-x-2 text-sm cursor-pointer hover:text-blue-600">
                  <input 
                    type="radio" name="age" 
                    checked={ageGroup === age}
                    onChange={() => setAgeGroup(age as AgeGroup)}
                    className="h-3 w-3" 
                  />
                  <span>{age}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Presentation */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">Presentation</h3>
            <div className="space-y-2">
              {['Medical', 'Trauma', 'Both'].map((type) => (
                <label key={type} className="flex items-center space-x-3 cursor-pointer text-sm font-medium">
                  <input 
                    type="radio" name="presentation" 
                    checked={presentation === type}
                    onChange={() => setPresentation(type as PresentationType)}
                    className="h-4 w-4" 
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ROS Section */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
          <div className="flex items-center space-x-2 mb-6 border-b pb-2">
            <Stethoscope className="text-blue-600" size={20} />
            <h3 className="text-xl font-bold text-slate-800">Review of Systems (ROS)</h3>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 uppercase text-xs tracking-wider border-b">
                <th className="py-2">System</th>
                <th className="py-2 text-center">Positive (+)</th>
                <th className="py-2 text-center">Negative (-)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {systems.map((system) => (
                <tr key={system} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 font-medium text-slate-700">{system}</td>
                  <td className="py-3 text-center">
                    <input 
                      type="checkbox" 
                      checked={ros[system].pos} 
                      onChange={() => handleRosChange(system, 'pos')}
                      className="h-5 w-5 rounded border-slate-300 text-red-600 focus:ring-red-500" 
                    />
                  </td>
                  <td className="py-3 text-center">
                    <input 
                      type="checkbox" 
                      checked={ros[system].neg} 
                      onChange={() => handleRosChange(system, 'neg')}
                      className="h-5 w-5 rounded border-slate-300 text-green-600 focus:ring-green-500" 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        </div>
    )
}

export default MdmViewer