import * as Sections from './EvaluationSection'

const isValidDate = (bdate) => (
  // must be a date
  Object.prototype.toString.call(date) === '[object Date]' &&
  date <= new Date() // cannot be born today or in the future
)

const Evaluation = (id, studentId, evaluatorId, superId, created_at, edited_at) => {
  const _created_at = created_at || Date(),
        _id = id
  let _edited_at = edited_at || Date(),
      _studentId = studentId,
      _evaluatorId = evaluatorId,
      _notes_section = Sections.notes(),
      _reflex_section = Sections.reflex(),
      _tactility_section = Sections.tactility(),
      _auditory_section = Sections.auditory(),
      _visual_section = Sections.visual(),
      _language_section = Sections.language(),
      _mobility_section = Sections.mobility(),
      _sensory_section = Sections.sensory(),
      _sensitivity_section = Sections.sensitivity()
  return {
    id:_id,
    studentId: _studentId,
    evaluatorId: _evaluatorId,
    created_at: _created_at,
    edited_at: _edited_at,
    ..._notes_section,
    ..._reflex_section,
    ..._tactility_section,
    ..._auditory_section,
    ..._visual_section,
    ..._language_section,
    ..._mobility_section,
    ..._sensory_section,
    ..._sensitivity_section
  }
}
