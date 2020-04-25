/*
 * This file is part of node-toxcore.
 *
 * node-toxcore is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * node-toxcore is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with node-toxcore. If not, see <http://www.gnu.org/licenses/>.
 *
 */

var ref = require("ref-napi");
var RefStruct = require("ref-struct-napi");

var CEnum = "int32";

// TODO(iphydf): Make this use accessors instead of giving it knowledge about
// the struct layout.
var ToxOptions = RefStruct({
  ipv6_enabled: "uint8",
  udp_enabled: "uint8",
  local_discovery_enabled: "uint8",
  proxy_type: CEnum,
  proxy_address: ref.refType("char"),
  proxy_port: "uint16",
  start_port: "uint16",
  end_port: "uint16",
  tcp_port: "uint16",
  hole_punching_enabled: "uint8",
  savedata_type: CEnum,
  savedata_data: ref.refType("uint8"),
  savedata_length: "size_t",
});

module.exports = ToxOptions;
