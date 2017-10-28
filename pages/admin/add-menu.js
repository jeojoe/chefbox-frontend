import React, { Component } from 'react';
import { LayoutAdmin, IngredientAdmin, InstructionCard } from '../../components';
import { withAuth } from '../../utils';

class AddMenu extends Component {
  state = {
    ingredients: [
      { name: 'ซอสส', amount: '10 กรัม' },
      { name: 'ซอสสss', amount: '10 กรัม' }
    ],
    instructions: [
      { id: 0, image: '', title: 'เตรียมเครื่องปรุง', description: 'ต้มน้ำให้เดือดใส่เกลือและน้ำมันมะกอกเล็กน้อย ตามด้วยเส้นลงไป ต้ม 7-8 นาที หรือ จนเส้นสุก แล้วนำขึ้นพักไว้' },
    ],
  }

  _renderIngredients = () => {
    return this.state.ingredients.map(ing => (
      <IngredientAdmin key={ing.name} name={ing.name} amount={ing.amount} />
    ));
  }

  _renderInstructions = () => {
    return this.state.instructions.map(ins => (
      <div className="col-6" key={ins.id}>
        <InstructionCard title={ins.title} image={ins.image} description={ins.description} />
      </div>
    ));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <LayoutAdmin title="Add Menu">
        <div className="d-flex justify-content-between" style={{ marginBottom: '15px' }}>
          <button>{'<'} Back</button>
          <h5>Add Menu</h5>
        </div>
        <div className="card" style={{ width: '100%' }}>
          <div className="list-group list-group-flush">
            <div className="list-group-item">
              <form onSubmit={this._onSubmit}>
                {/* Menu Name */}
                <div className="form-group">
                  <label htmlFor="menu-name">ชื่อเมนู</label>
                  <input
                    type="text" id="menu-name"
                    placeholder="" className="form-control"
                    onChange={e => this.setState({ menuName: e.target.value })}
                  />
                </div>
                {/* Price */}
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="menu-name">ราคา (บาท)</label>
                    <input
                      type="number" id="menu-name"
                      placeholder="" className="form-control"
                      onChange={e => this.setState({ menuName: e.target.value })}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="time-to-cook">Servings (คน)</label>
                    <input
                      type="number" className="form-control"
                      id="time-to-cook"
                      placeholder="2"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <div className="form-group">
                      <label htmlFor="menu-image">รูปภาพ</label>
                      <input type="file" className="form-control-file" id="menu-image" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="form-group">
                  <label htmlFor="description">รายละเอียด</label>
                  <textarea className="form-control" id="description" rows="3" />
                </div>

                {/* Time to cook + Cooking Skill + Calories */}
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="time-to-cook">ใช้เวลา (นาที)</label>
                    <input
                      type="number" className="form-control"
                      id="time-to-cook"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="time-to-cook">แคลอรี่ (kcal)</label>
                    <input
                      type="number" className="form-control"
                      id="time-to-cook"
                      placeholder="ใส่แคลฯ.."
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="difficulties">ความยาก</label>
                    <select
                      type="number" className="form-control"
                      id="difficulties" multiple
                    >
                      <option>ง่าย</option>
                      <option>ปลานกลาง</option>
                      <option>ยาก</option>
                    </select>
                  </div>
                </div>

                {/* Servings + Nutrients */}
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="protein">โปรตีน (กรัม)</label>
                    <input
                      type="number" className="form-control"
                      id="protein"
                      placeholder="20"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="card">คาร์โบไฮเดรต (กรัม)</label>
                    <input
                      type="number" className="form-control"
                      id="carb"
                      placeholder="30"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="fat">ไขมัน (กรัม)</label>
                    <input
                      type="number" className="form-control"
                      id="fat"
                      placeholder="30"
                    />
                  </div>
                </div>

              </form>
            </div>

            {/* Ingredients */}
            <div className="list-group-item">
              <div style={{ marginBottom: '15px' }}>
                <h3>วัตถุดิบ</h3>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="ingredients-image">รูปภาพวัตุดิบ</label>
                    <input type="file" className="form-control-file" id="ingredients-image" />
                  </div>
                </div>
                <div className="col">
                  {this._renderIngredients()}
                  <div className="card" style={{ padding: '10px', marginBottom: '10px' }}>
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text" className="form-control"
                          placeholder="ชื่อวัตถุดิบ"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text" className="form-control"
                          placeholder="ปริมานพร้อมหน่วย"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-success">+ เพิ่มวัตถุดิบ</button>
                </div>
              </div>
            </div>

            {/* How to Cook */}
            <div className="list-group-item">
              <div style={{ marginBottom: '15px' }}>
                <h3>วิธีการทำอาหาร</h3>
              </div>

              <div className="row">
                {this._renderInstructions()}
                <div className="col-6">
                  <div className="card" style={{ width: '100%' }}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="instruction-image">รูปภาพวิธีการทำอาหาร</label>
                        <input type="file" className="form-control-file" id="instruction-image" />
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="title" className="form-control" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" rows={3} placeholder="description" />
                      </div>
                      <button className="btn btn-success">+ เพิ่มวิธีการทำอาหาร</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    );
  }
}

export default withAuth(AddMenu);
