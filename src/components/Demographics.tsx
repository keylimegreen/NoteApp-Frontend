import react from 'react'
import {Share2} from 'lucide-react'

const Demographics: React.FC = () => {
    
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {/* Gender */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">
            Gender
          </h3>
          <div className="space-y-2">
            {["Male", "Female"].map((g) => (
              <label
                key={g}
                className="flex items-center space-x-3 cursor-pointer p-1 hover:bg-slate-50 rounded"
              >
                <input
                  type="checkbox"
                  name="gender"
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
          <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">
            Age Group
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Neonate",
              "Infant",
              "Child",
              "Adolescent",
              "Adult",
              "Elderly",
            ].map((age) => (
              <label
                key={age}
                className="flex items-center space-x-2 text-sm cursor-pointer hover:text-blue-600"
              >
                <input
                  type="radio"
                  name="age"
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
          <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">
            Presentation
          </h3>
          <div className="space-y-2">
            {["Medical", "Trauma", "Both"].map((type) => (
              <label
                key={type}
                className="flex items-center space-x-3 cursor-pointer text-sm font-medium"
              >
                <input
                  type="radio"
                  name="presentation"
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
    )}

export default Demographics
